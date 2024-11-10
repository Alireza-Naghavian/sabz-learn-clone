# Sabz-learn-clone NEXT.JS

## See demo on vercel  [click here](https://sabz-learn-clone.vercel.app/)


## توضیحات
این یک کلون کامل از وب سایت سبز لرن با امکانات اضافی است.
از جلمه امکانات اضافه شده میتوان به موارد زیر اشاره کرد

- PWA with push notification
- Improve UX with adding bookmark section
- Use custom search engine of google to suggest relate external blogs & courses

## چالش های شخصی من در این پروژه

- استفاده از همزمان از نکست جی اس و ریداکس کوئری و رندر سمت سرور
-  اپلود ویدئو جلسات در cloudinary
- استفاده از یک موتور جستجو سفارشی سازی شده برای جستجو مقالات مرتبط با عنوان جلسه مربوطه 
- تغییرات فایل بک اند پروژه برای دریافت نتیجه بهتر


## Description
this is an professional clone  from sabz-learn website
with some extra features
includes several pages,eg:courses page,single course page,
category,sorting,filter courses,blogs,JWT authentication,login page,userpanel,
admin panel and more...


## Using
- Nextjs v.14 app router
- React
- Typescript
- TailwindCss
- MongoDB
- Redux toolkit (RTK query)
- JWT

## Features
Full-stack education website
- Allows registered users to register in desire courses, write  courses comments,share their problems with admins , and update their account information.
- Allows registered users to login with email/password.
- Allows users to use practical blogs about programming


Admin privileges

- Allows creation and update new course, categories and manage all state of product .

- Allows creation and update new blog and manage them .

- Allows to track sales and growth list of website

- It is allowed to create and manage the discount code in terms of the number of times it is used and the percentage of the discount
- Run new campaign 
- Enables easy product discovery and sorting based on user preferences.

- Monitoring users ,their comments and tickets (answer comment tickets and chat with users)


## Installation

1.Clone or download the repository by running the following command in your terminal:

```bash
git clone https://github.com/Alireza-Naghavian/sabz-learn-clone.git
```
2.Install the project dependencies using either npm or yarn:

```bash
npm install
```
or
```bash
yarn
```

3.create .env file in the root directory of the project and Define the required environment variables  . The following variables are necessary:

    
```bash
JWT_SECRET=your jwt secret code
NEXT_PUBLIC_CKEDITOR=your Ckeditor api
NEXT_PUBLIC_GOOGLE_API_KEY=a google api key for custom search engine
NEXT_PUBLIC_SEARCH_ENGINE_ID=a google id  for custom search engine
NODE_ENV= production || development
NEXT_PUBLIC_API_URL=your backend local address

NEXT_PUBLIC_VAPID_PUBLIC_KEY=your public vapid key for push notification
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your cloudinary account name for upload video session
NEXT_PUBLIC_CLOUDINARY_CLOUD_PRESET= your cloudinary account preset for upload config

```


## Screenshots

![Screenshot 2024-09-07 104339](https://github.com/user-attachments/assets/1c32c262-cb59-45ac-a4f0-9b679cf82158)

![Screenshot 2024-09-07 104339](https://github.com/user-attachments/assets/3919fac9-a364-49c5-9d83-365295cafbb1)

<h2>category page</h2>
  
![Screenshot 2024-09-07 104339](https://github.com/user-attachments/assets/b0dce929-17ac-4a52-a75c-de7ded95347d)




<h2>product page</h2>

![Screenshot 2024-09-07 104339](https://github.com/user-attachments/assets/9bccf4cd-122c-4c8b-8c42-20d9e0ebf035)



<h2>user panel</h2>

![Screenshot 2024-09-07 104339](https://github.com/user-attachments/assets/563ed4b4-7927-4ed0-8050-f48698ab69a7)


<h2>admin panel</h2>

![Screenshot 2024-09-07 104339](https://github.com/user-attachments/assets/d9fb77cc-ce72-42bb-bb79-2a094873e902)

