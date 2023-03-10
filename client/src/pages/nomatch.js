import { Button, Result } from 'antd';
const NoMatch = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><a href='/'>Back Home</a></Button>}
  />
);
export default NoMatch;