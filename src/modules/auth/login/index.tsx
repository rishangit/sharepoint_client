import { ButtonProps, Button } from '@primitives';
import { USER_LOGIN } from '@sys/httpCall';

const LoginComponent = () => {
  const btnProps: ButtonProps = {
    themeColor: 'primary',
  };
  return (
    <div>
      This is login \{USER_LOGIN}
      <Button {...btnProps}>Login </Button>
    </div>
  );
};

export default LoginComponent;
