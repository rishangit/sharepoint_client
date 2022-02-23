import { LogingModel } from "./types";

const inputValidator = (value) => (!value ? "Please enter a text." : "");

export const initialModel: LogingModel = {
  username: "",
  password: "",
};

export const formElementProps = ({ formRenderProps, FormInput }: any) => ({
  username: {
    id: "username",
    name: "username",
    label: "Username",
    hint: "Hint: Enter your text here",
    value: formRenderProps.valueGetter("username"),
    component: FormInput,
    validator: inputValidator,
    max: 20,
  },
  password: {
    id: "password",
    type: "password",
    name: "password",
    label: "Password",
    hint: "Hint: Enter your Password here",
    value: formRenderProps.valueGetter("password"),
    component: FormInput,
    validator: inputValidator,
  },
  submitBtn: {
    themeColor: "primary",
    disabled: !formRenderProps.allowSubmit,
    type: "submit"
  }
});
