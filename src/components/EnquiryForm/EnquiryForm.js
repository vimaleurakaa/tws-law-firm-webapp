import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const EnquiryForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="container">
      <Form
        {...layout}
        name="enquiry-form"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input placeholder="Full Name" />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name={["user", "Mobile No"]}
          rules={[
            {
              type: "number",
            },
          ]}
        >
          <InputNumber placeholder="Mobile No" />
        </Form.Item>
        <Form.Item name={["user", "website"]}>
          <Input />
        </Form.Item>
        <Form.Item name={["user", "introduction"]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EnquiryForm;
