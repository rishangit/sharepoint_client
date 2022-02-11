import { LogingModel } from "./types";

const inputValidator = (value) => (!value ? "Please enter a text." : "");

export const initialModel: LogingModel = {
  username: "",
  email: "",
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
    max:20,
  },
  email: {
    id: "email",
    name: "email",
    label: "Email",
    hint: "Hint: Enter your Email here",
    value: formRenderProps.valueGetter("email"),
    component: FormInput,
    validator: inputValidator,
  },
});
