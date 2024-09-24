"use client"
import styles from "@/components/layouts/admin/Courses/CourseForm/course_form.module.css"
import HeaderAdminLayout from '@/components/shared/Headers/HeaderAdminLayout'
import PrimaryBtn from '@/components/ui/button/PrimaryBtn'
import MainTextField from '@/components/ui/textField&inputs/MainTextField'
import StatusBox from '@/components/ui/textField&inputs/StatusBox'
import Select from '@/components/utils-components/Select/Select'
import { CurrencyDollarIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { fakeCategory } from './TopicForm'
function SessionForm() {
     const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [topic, setTopic] = useState({ label: "", value: "" });
  const [course, setCourse] = useState({ label: "", value: "" });
  const [ status,setStatus] = useState("free")
 return (
<HeaderAdminLayout title='افزودن جلسه'>
<form
        className="flex flex-col gap-y-6   relative py-6 container"
        autoComplete="on"
      >
        <div className={`${styles.input_group}`}>
          <MainTextField
            register={register}
            name="title"
            id="title"
            errors={errors}
            placeHolder="عنوان جلسه ..."
            variant="rounded"
            type="text"
            size="largeSize"
            className="w-full"
          />
          <Select
            options={fakeCategory}
            value={topic.value}
            onChange={(e) =>
                setTopic({ value: e.target.value, label: topic.label })
            }
            className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
          />
        </div>
        <div className={`${styles.input_group}`}>
        <Select
            options={fakeCategory}
            value={topic.value}
            onChange={(e) =>
                setTopic({ value: e.target.value, label: topic.label })
            }
            className="  !gap-y-0 px-4  !py-3 !mt-0 focus:outline-none "
          />
          <div className="flex">
          <StatusBox
            register={register}
            name="free"
            Icon={PlayCircleIcon}
            setStatus={setStatus}
            status={status}
            value="free"
            watch={watch}
            title="رایگان"
            className="child:md:!text-lg child:!text-sm"
            wrapperStyles="rounded-r-xl "
          />
          <StatusBox
            register={register}
            name="paid"
            Icon={CurrencyDollarIcon}
            setStatus={setStatus}
            status={status}
            value="paid"
            watch={watch}
            title="غیر رایگان"
            className="child:md:!text-lg child:!text-sm"
            wrapperStyles="rounded-l-xl "
          />
          </div>
        </div>
        <div className={`${styles.input_group}`}>
        <MainTextField
            register={register}
            name="video"
            id="video"
            errors={errors}
            placeHolder="فایل جلسه ..."
            variant="rounded"
            type="file"
            label=''
            size="largeSize"
            className="w-full"
          />
        <MainTextField
            register={register}
            name="time"
            id="time"
            errors={errors}
            placeHolder="زمان جلسه ..."
            variant="rounded"
            type="text"
            
            size="largeSize"
            className="w-full"
          />
        </div>
        <PrimaryBtn
          variant="fill"
          size="lg"
          type="submit"
          className="mr-auto w-full md:w-[100px] rounded-xl px-6 py-2"
        >
          افزودن
        </PrimaryBtn>
      </form>
       </HeaderAdminLayout>
  )
}

export default SessionForm