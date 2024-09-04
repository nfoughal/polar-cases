"use client"
import { Progress } from '@/components/ui/progress'
import { useToast } from '@/components/ui/use-toast'
import { useUploadThing } from '@/lib/uploadthing'
import { cn } from '@/lib/utils'
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState, useTransition } from 'react'
import Dropzone, { FileRejection } from 'react-dropzone'

const page = () => {

    const [isDragOver, setIsDragOver] = useState<boolean>(false);
    const [uploadProgress, setUploadProgress] = useState<number>(75);
    const [isPending, startTransition] = useTransition();
    // const isUploading = true;
    const { toast } = useToast();
    const router = useRouter();

    const {startUpload, isUploading} = useUploadThing("imageUploader", {
        onClientUploadComplete: ([data]) => {
            const configId = data.serverData.configId;
            startTransition( () => {
                router.push(`/configure/design?id=${configId}`)
            } )
        },
        onUploadProgress(p) {
            setUploadProgress(p);
        }
    })

    const onDropRejected = (rejectedFiles: FileRejection[]) => {
        const [file] = rejectedFiles;

        setIsDragOver(false);

        toast({
            title: `${file.file.type} type is not supported.`,
            description: "Please choose png, jpg or jpeg image instead.",
            variant: "destructive"
        })
    }

    const onDropAccepted = (acceptedFiles: File[]) => {
        startUpload(acceptedFiles,  { configId: undefined });
        setIsDragOver(false)
    }

  return (
    <div className={cn(
        'relative h-full my-16 rounded-xl bg-gray-900/5 p-2 ring-1  ring-gray-900/10 lg:rounded-2xl flex justify-center items-center ',
        {
            'ring-bleu-900/25 bg-blue-900/10': isDragOver
        }
    )}>
        <Dropzone
            onDropRejected={onDropRejected}
            onDropAccepted={onDropAccepted}
            accept={{
                'image/png' : ['.png'],
                'image/jpj' : ['.jpj'],
                'image/jpeg' : ['.jpeg']
            }}
            onDragEnter={() => setIsDragOver(true)}
            onDragLeave={() => setIsDragOver(false)}
        >
            {({getRootProps, getInputProps}) => (
                <div className='h-full flex flex-col items-center justify-center' {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragOver ? (
                        <MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2'/>
                    ) : isUploading || isPending ? (
                        <Loader2 className='animate-spin  h-6 w-6 text-zinc-500 mb-2'/>
                    ) : (
                        <Image className='h-6 w-6 text-zinc-500 mb-2'/>
                    )}
                    <div>
                        {isUploading ? (
                            <div className='flex flex-col items-center'>
                                <p>Uploading...</p>
                                <Progress
                                value={uploadProgress}
                                className='mt-2 w-40 h-2 bg-gray-300'
                                />
                            </div>
                        ) : isPending ? (
                            <div className='flex flex-col items-center'>
                                <p>Redirecting, please wait...</p>
                            </div>
                        ) : isDragOver ? (
                            <p>
                                <span className='font-semibold'>Drop file</span> to upload
                            </p>
                        ) : (
                            <p>
                                <span className='font-semibold'>Click to upload</span> or drag and drop
                            </p>
                        )}
                    </div>
                </div>
            )}
        </Dropzone>
    </div>
  )
}

export default page