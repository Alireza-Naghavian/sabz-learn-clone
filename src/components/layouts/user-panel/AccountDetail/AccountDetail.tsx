"use client";
import ChangeEmail from "./ChangeEmail";
import ChangePassword from "./ChangePassword";

function AccountDetail() {
  // const {
  //   register,
  //   formState: { errors },
  // } = useForm();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
    <ChangeEmail/>
      {/* password box */}
  <ChangePassword/>
    </div>
  );
}

export default AccountDetail;
