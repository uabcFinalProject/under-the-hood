import { Card, Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Tools = () => {
  return (
    <div style={{ padding: '24px', background: '#CBDCCE', height: '100vh' }}>
      <Title level={2}>Tips</Title>
      <Card
        style={{ width: '100%', marginBottom: '24px', background: '#FAE4D1' }}
        title={
          <Title level={3}>
            <SmileOutlined /> 1. Check your tires.
          </Title>
        }
      >
        <Text>
          Knowing how to maintain your car's tire pressure can help reduce wear on the tires and helps ensure you're getting good gas mileage. Checking your tire pressure includes finding the recommended pressure, checking the PSI and inflating or deflating your tires accordingly.
          A flat tire is a hazard that can be dangerous to you and your car. There are several preventative steps you can take to help avoid a blowout, including rotating your tires every 5,000 to 10,000 miles and watching for tire recalls.
          Maintenance tip: Test the air pressure of your driving tires and your spare tire once a month.
        </Text>
      </Card>
      <Card
        style={{ width: '100%', marginBottom: '24px', background: '#FAE4D1' }}
        title={
          <Title level={3}>
            <SmileOutlined /> 2. Change the oil.
          </Title>
        }
      >
        <Text>
          Routinely checking and changing your car's oil is essential to keeping its engine in running condition. Check your oil each month and change it as directed in the car's owner's manual.
          You can change your oil yourself or take it to a service center. If you choose to do it yourself, learn the necessary steps to drain the fluid, set the correct oil level and dispose of old oil.
          You should also know which type of motor oil is best for your car, regardless of whether you change the oil yourself or take it to a service center. This generally means considering three things — the oil viscosity, whether to use synthetic versus non-synthetic oil and your car's mileage.
          Maintenance tip: Change the oil every 5,000 miles or follow your car manufacturer’s recommendations.
        </Text>
      </Card>
      <Card
        style={{ width: '100%', marginBottom: '24px', background: '#FAE4D1' }}
        title={
          <Title level={3}>
            <SmileOutlined /> 3. Keep the battery clean.
          </Title>
        }
      >
        <Text>
          Over time, corrosion (which looks like white or bluish powder) can form on the terminals of your car’s battery (those little metal knobs on top). If you don’t keep them clean, the battery could develop a crack or simply not function, leaving you stranded. Since a quality car battery can cost upward of $250—and a tow can run you even more—buying a $5 wire brush and keeping the terminals looking spiffy is money well spent.2
          Maintenance tip: Test your battery twice a year and inspect it for corrosion..
        </Text>
      </Card>
    </div>
  );
};

export default Tools;
