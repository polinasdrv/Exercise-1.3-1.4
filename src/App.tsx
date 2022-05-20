import { appendErrors, SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "./interface";
import "./index.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    alert("Вы зарегистрированы");
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Задание 1.3. Валидация значений</h1>
        <div>
          <input
            className="inp"
            {...register("name", { required: "Проверьте заполнение поля Имя" })}
            type="text"
            placeholder="Имя"
          ></input>
          {errors?.name && <div>{errors.name.message}</div>}
        </div>
        <div>
          <input
            {...register("email", {
              required: "Проверьте заполнение поля E-mail",
              pattern: {
                value:
                  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                message: "E-mail заполнен не верно",
              },
            })}
            type="text"
            placeholder="E-mail"
          ></input>
          {errors?.email && <div>{errors.email.message}</div>}
        </div>
        <div>
          <input
            {...register("phoneNumber", {
              required: "Проверьте заполнение поля Номер телефона",
              pattern: {
                value:
                  /^(8|7)(\(?[9]\d{2}\)?)(\d{3}[\-| ]?)(\d{2}[\-| ]?\d{2})$/,
                message: "Номер телефона заполнен не верно",
              },
            })}
            type="text"
            maxLength={11}
            placeholder="Номер телефона"
          ></input>
          {errors?.phoneNumber && <div>{errors.phoneNumber.message}</div>}
        </div>
        <div>
          <input
            {...register("data", {
              required: "Проверьте заполнение поля Дата",

              pattern: {
                value: /^([0-9]{2})[./]([0-9]{2})[./]([0-9]{4})$/,
                message: "Дата введена не верно",
              },
            })}
            type="text"
            placeholder="DD.MM.YYYY"
          ></input>
          {errors?.data && <div>{errors.data.message}</div>}
        </div>
        <div className="checkbox">
          <input
            {...register("checkbox", {
              required: "Поле обработка персональных данных не заполнено",
            })}
            type="checkbox"
          ></input>
          <div>Согласие на обработку персональных данных</div>
        </div>
        <div>
          <button>Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
}

export default App;
