import { Card, Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Tools = () => {
  return (
    <div style={{ padding: '24px' }}>
      <Title level={2}>Tips</Title>
      <Card
        style={{ width: '100%', marginBottom: '24px' }}
        title={
          <Title level={3}>
            <SmileOutlined /> Tip #1
          </Title>
        }
      >
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dignissim mauris vel mauris auctor, eu bibendum orci congue. Donec id
          ipsum sit amet arcu efficitur tempus. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </Text>
      </Card>
      <Card
        style={{ width: '100%', marginBottom: '24px' }}
        title={
          <Title level={3}>
            <SmileOutlined /> Tip #2
          </Title>
        }
      >
        <Text>
          Sed faucibus urna quis tellus fringilla, at varius nisl suscipit.
          Pellentesque euismod enim non magna tincidunt bibendum. Cras
          ullamcorper dolor at ex pretium, sed posuere felis ultrices. Fusce nec
          quam mauris. Aenean auctor finibus bibendum.
        </Text>
      </Card>
      <Card
        style={{ width: '100%', marginBottom: '24px' }}
        title={
          <Title level={3}>
            <SmileOutlined /> Tip #3
          </Title>
        }
      >
        <Text>
          Proin euismod convallis mauris, quis rutrum nisi sagittis eu. Nulla
          facilisi. Aenean laoreet dui sed est tristique, at faucibus enim
          dignissim. Sed auctor vel nibh eu laoreet. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </Text>
      </Card>
    </div>
  );
};

export default Tools;