"use client"
import React, { useState } from 'react'
import ContentList from '../ContentList'
import Select from '@/components/utils-components/Select/Select'
import { deptList } from '@/utils/constants'
import { useForm } from 'react-hook-form'
import MainTextField from '@/components/ui/textField&inputs/MainTextField'
import TextAriaField from '@/components/ui/textField&inputs/TextAriaField'
import PrimaryBtn from '@/components/ui/button/PrimaryBtn'

function TicketForm() {
    const [dept,setDept] = useState("")
    const {register ,handleSubmit,formState:{errors}} = useForm();
  return (
   <ContentList title='ارسال تیکت' >
    <form className='w-full h-full flex flex-col justify-center gap-y-8' >

            <Select
            selectTitle='دپارتمان '
            options={deptList}
            onChange={(e)=>setDept(e.target.value)}
            value={dept}
            />
            <MainTextField
            name='title'
            id='title'
            label='موضوع تیکت'
            variant='rounded'
            errors={errors}
            register={register}
            type='text'
            size={"largeSize"}
            placeHolder='موضوع تیکت خود را وارد کنید'
            />
        <TextAriaField
        register={register}
        name='body'
        id='body'
        label='متن تیکت'
        required={true}
        placeHolder='متن تیکت خود را وارد کنید'
        variant='freeMode'
        type='text'
        errors={errors}
        />
      <div className="">
      <PrimaryBtn type='submit' className='mr-auto !rounded-lg '  variant='fill' size='lg'>ارسال</PrimaryBtn>
      </div>
    </form>
   </ContentList>
  )
}

export default TicketForm