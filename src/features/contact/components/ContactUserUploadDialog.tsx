"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useUploadAvatarMutation } from "../hooks/useUploadAvatarMutation";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";

export function ContactUserUploadDialog({
  onUploadSuccess,
  imageUrl,
}: {
  onUploadSuccess: (url: string) => void;
  imageUrl?: string | null;
}) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const Trigger = (
    <Button variant="secondary" className="flex items-center gap-2">
      {imageUrl ? (
        <>
          <Avatar className="size-8 border-2 border-white">
            <AvatarImage src={imageUrl} alt="Avatar" />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
          <span className="text-muted-foreground">Change avatar</span>
        </>
      ) : (
        "Pick an avatar"
      )}
    </Button>
  );

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{Trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Photo upload</DialogTitle>
            <DialogDescription>
              Use a recent color photo in JPEG, PNG, or GIF format and smaller than 5
              MB.
            </DialogDescription>
          </DialogHeader>
          <UserAvatarForm setOpen={setOpen} onUploadSuccess={onUploadSuccess} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{Trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Photo upload</DrawerTitle>
          <DrawerDescription>
            Use a recent color photo in JPEG, PNG, or GIF format and smaller than 5
            MB.
          </DrawerDescription>
        </DrawerHeader>
        <UserAvatarForm
          className="px-4"
          setOpen={setOpen}
          onUploadSuccess={onUploadSuccess}
        />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function UserAvatarForm({
  className,
  setOpen,
  onUploadSuccess,
}: React.ComponentProps<"form"> & {
  setOpen: (open: boolean) => void;
  onUploadSuccess: (url: string) => void;
}) {
  const [image, setImage] = React.useState<File | null>(null);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const { mutate: uploadAvatar, isPending, progress } = useUploadAvatarMutation();

  const handleImageUpload = (image: File | null) => {
    if (!image) {
      toast.error("Please provide an image");
      return;
    }

    const imageData = new FormData();
    imageData.append("avatar", image);

    uploadAvatar(imageData, {
      onSuccess: (res) => {
        if (fileInputRef.current) fileInputRef.current.value = "";
        setOpen(false);
        onUploadSuccess(res.data.url);
      },
    });
  };

  return (
    <form className={cn("grid items-start gap-6", className)}>
      <Input
        ref={fileInputRef}
        id="image"
        accept="image/*"
        type="file"
        onChange={(e) => {
          const files = e.target.files;
          if (files && files.length > 0) {
            setImage(files[0]);
          }
        }}
      />

      {isPending && (
        <div className="space-y-2">
          <Progress value={progress} />
          <p className="text-muted-foreground text-sm">{progress}%</p>
        </div>
      )}

      <Button
        type="button"
        onClick={() => handleImageUpload(image)}
        disabled={isPending}
      >
        {isPending ? "Uploading..." : "Upload"}
      </Button>
    </form>
  );
}
