import { useUpdateCurrentUserProfileMutation } from "@/api/userApiSlice";
import { typeToastEnum } from "@/enums/typeToastEnum";
import { selectAuthSession, setSession } from "@/features/authSlice";
import { setToastMessage } from "@/features/toastSlice";
import {
  IUseUpdateProfileProps,
  IUseUpdateProfileReturn,
} from "@/interface/IUser";
import { UpdateProfileFormValues } from "@/type/types";
import { updateProfileSchema } from "@/validation/updateProfileValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const useUpdateProfile = ({
  profile,
  onSuccess,
}: IUseUpdateProfileProps): IUseUpdateProfileReturn => {
  const baseUrl = import.meta.env.VITE_BASE_URL_localhostApi;
  const [updateProfile, { isLoading }] = useUpdateCurrentUserProfileMutation();
  const [previewUrl, setPreviewUrl] = useState(
    profile.image ? `${baseUrl}${profile.image}` : "",
  );
  const previewObjectUrlRef = useRef<string | null>(null);
  const session = useSelector(selectAuthSession);
  const dispatch = useDispatch();

  const methods = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateProfileSchema),
    mode: "onChange",
    defaultValues: {
      username: profile.username,
      email: profile.email,
      imageFile: null,
      removeImage: false,
    },
  });

  const releasePreviewObjectUrl = () => {
    if (previewObjectUrlRef.current) {
      URL.revokeObjectURL(previewObjectUrlRef.current);
      previewObjectUrlRef.current = null;
    }
  };

  useEffect(() => {
    releasePreviewObjectUrl();
    methods.reset({
      username: profile.username,
      email: profile.email,
      imageFile: null,
      removeImage: false,
    });
    setPreviewUrl(profile.image ? `${baseUrl}${profile.image}` : "");
  }, [profile]);

  useEffect(
    () => () => {
      if (previewObjectUrlRef.current) {
        URL.revokeObjectURL(previewObjectUrlRef.current);
      }
    },
    [],
  );

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    releasePreviewObjectUrl();
    const objectUrl = URL.createObjectURL(file);
    previewObjectUrlRef.current = objectUrl;
    setPreviewUrl(objectUrl);
    methods.setValue("imageFile", file, {
      shouldDirty: true,
      shouldValidate: true,
    });
    methods.setValue("removeImage", false, {
      shouldDirty: true,
      shouldValidate: true,
    });
    event.target.value = "";
  };

  const handleRemoveImage = () => {
    releasePreviewObjectUrl();
    setPreviewUrl("");
    methods.setValue("imageFile", null, {
      shouldDirty: true,
      shouldValidate: true,
    });
    methods.setValue("removeImage", Boolean(profile.image), {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<UpdateProfileFormValues> = async (values) => {
    const data = new FormData();
    const username = values.username.trim();
    const email = values.email.trim();
    let hasChanges = false;

    if (username !== profile.username) {
      data.append("username", username);
      hasChanges = true;
    }

    if (email !== profile.email) {
      data.append("email", email);
      hasChanges = true;
    }

    if (values.imageFile) {
      data.append("imageFile", values.imageFile);
      hasChanges = true;
    } else if (values.removeImage && profile.image) {
      data.append("removeImage", "true");
      hasChanges = true;
    }

    if (!hasChanges) return;

    try {
      const updatedProfile = await updateProfile({ data }).unwrap();

      if (session && session.userName !== updatedProfile.username) {
        dispatch(
          setSession({
            ...session,
            userName: updatedProfile.username,
          }),
        );
      }

      releasePreviewObjectUrl();
      setPreviewUrl(
        updatedProfile.image ? `${baseUrl}${updatedProfile.image}` : "",
      );
      methods.reset({
        username: updatedProfile.username,
        email: updatedProfile.email,
        imageFile: null,
        removeImage: false,
      });

      dispatch(
        setToastMessage({
          status: typeToastEnum.success,
          message: "اطلاعات حساب کاربری با موفقیت ویرایش شد.",
        }),
      );
      onSuccess?.();
    } catch {
      // پیام خطای API به‌صورت سراسری در apiSlice نمایش داده می‌شود.
    }
  };

  return {
    methods,
    onSubmit,
    isLoading,
    previewUrl,
    handleFileChange,
    handleRemoveImage,
  };
};

export default useUpdateProfile;
