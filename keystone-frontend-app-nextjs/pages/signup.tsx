import { Form, Input, Button, Checkbox } from 'antd';
import HeaderContentFooter from '../layouts/header-content-footer';


function Signup(){
 
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


    return (
        <HeaderContentFooter>
                <button>Request Access</button>
        </HeaderContentFooter>
        
      );
}

export default Signup