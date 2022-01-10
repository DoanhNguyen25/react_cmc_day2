import React, { useState, useEffect } from "react";
import { FormWrapper } from "./style";
import moment from "moment";
const Form = () => {
  // regex
  const regexUser = /^[a-zA-Z ]*$/;

  // variable value
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [date, setDate] = useState(moment().format("YYYY-MM-DD"));
  const [type, setType] = useState("");

  // variable checkbox
  const [checked, setChecked] = useState(false);

  //variable validate
  const [isName, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isQuantity, setIsQuantity] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  // handle input
  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };
  const handleAddressInput = (e) => {
    setAddress(e.target.value);
  };
  const handleQuantityInput = (e) => {
    setQuantity(e.target.value);
  };
  const handleDateInput = (e) => {
    const newDate = moment(new Date(e.target.value)).format("YYYY-MM-DD");
    setDate(newDate);
  };
  const handleTypeInput = (e) => {
    setType(e.target.value);
  };

  // submit
  const submitForm = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (name && phone && quantity) {
      alert(
        `dữ liệu người dùng nhập vào ${name} - ${phone} - ${address}, số lượng khách tham gia: ${quantity}, ngày tổ chức ${date}, thể loại:${type}`
      );
      setName("");
      setPhone("");
      setAddress("");
      setQuantity(0);
      setDate(moment(new Date()).format("YYYY-MM-DD"));
      setType("");
    } else {
      alert("bạn cần nhập đủ thông tin các trường");
    }
  };

  //validate form
  useEffect(() => {
    setIsName(!name || !regexUser.test(name));
    setIsPhone(!phone || phone.length < 10);
    setIsQuantity(quantity <= 0);

    return () => {};
  }, [name, quantity, phone]);

  return (
    <FormWrapper>
      <div className="form--title">Liên hệ đặt tiệc</div>
      <div className="form__container">
        <div className="form--desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry type and scrambled it to make a type specimen book.Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </div>
        <form onSubmit={submitForm}>
          <div className="form__info">
            <div className="form__col--left">
              <div className="form__col--group">
                <label
                  htmlFor="name"
                  style={{ textAlign: "left" }}
                  className="form__col--group-name"
                >
                  Họ và tên
                </label>
                <br />
                <input
                  id="name"
                  type="text"
                  placeholder="Nhập họ và tên"
                  onChange={handleNameInput}
                  value={name}
                />
                {isName && isSubmit ? (
                  <span style={{ color: "red", textAlign: "left" }}>
                    họ tên không hợp lệ
                  </span>
                ) : null}
              </div>
              <div className="form__col--group">
                <label
                  htmlFor="phone"
                  style={{ textAlign: "left" }}
                  className="form__col--group-name"
                >
                  Số điện thoại
                </label>
                <br />
                <input
                  id="phone"
                  type="text"
                  placeholder="Số điện thoại"
                  value={phone}
                  onChange={handlePhoneInput}
                />
                {isPhone && isSubmit ? (
                  <span style={{ color: "red", textAlign: "left" }}>
                    số điện thoại không hợp lệ
                  </span>
                ) : null}
              </div>
              <div className="form__col--group">
                <label
                  htmlFor="address"
                  style={{ textAlign: "left" }}
                  className="form__col--group-name"
                >
                  Địa chỉ
                </label>
                <br />
                <input
                  id="address"
                  type="text"
                  placeholder="nhập địa chỉ"
                  value={address}
                  onChange={handleAddressInput}
                />
              </div>
            </div>
            <div className="form__col--right">
              <div className="form__col--group">
                <label
                  htmlFor="quantityGuest"
                  style={{ textAlign: "left" }}
                  className="form__col--group-name"
                >
                  Số lượng khách
                </label>
                <br />
                <input
                  id="quantityGuest"
                  type="number"
                  placeholder="số lượng khách"
                  value={quantity}
                  onChange={handleQuantityInput}
                />
                {isQuantity && isSubmit ? (
                  <span style={{ color: "red", textAlign: "left" }}>
                    số lượng không hợp lệ
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="form__col--group">
                <label
                  htmlFor="date"
                  style={{ textAlign: "left" }}
                  className="form__col--group-name"
                >
                  Ngày tổ chức sự kiện
                </label>
                <br />
                <input
                  id="date"
                  type="date"
                  placeholder="ngày tổ chức"
                  value={date}
                  onChange={handleDateInput}
                />
              </div>
              <div className="form__col--group">
                <label
                  htmlFor="type"
                  style={{ textAlign: "left" }}
                  className="form__col--group-name"
                >
                  Loại sự kiện
                </label>
                <br />
                <input
                  id="type"
                  type="text"
                  placeholder="nhập loại sự kiện"
                  value={type}
                  onChange={handleTypeInput}
                />
              </div>
            </div>
          </div>
          <label className="form--checkbox" htmlFor="checkbox">
            <input
              type="checkbox"
              checked={checked}
              onClick={() => {
                setChecked(!checked);
              }}
              id="checkbox"
            />
            Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khẩu,...)
            <span className="checkmark"></span>
          </label>

          {checked ? (
            <button onClick={submitForm} className="btn--submit">
              gửi thông tin
            </button>
          ) : (
            <button onClick={submitForm} className="btn--submit" disabled>
              gửi thông tin
            </button>
          )}
        </form>
      </div>
    </FormWrapper>
  );
};

export default Form;
