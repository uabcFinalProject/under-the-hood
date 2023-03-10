import { Layout } from 'antd';
const { Footer } = Layout;

const End = () => {
      return ( 
    <Layout className="layout">
    <Footer
        style={{
          textAlign: 'center',
          position: 'sticky, bottom: 0',
          background: '#CBDCCE'
        }}
      >
        Final Project 2023 // Credits: <a href="https://github.com/iseanc">Sean Collins</a>, <a href="https://github.com/maggierdelaney">Maggie Delaney</a>, <a href="https://github.com/JessicaOB">Jessica Oboh</a>, <a href="https://github.com/Pscully21">Parker Scully</a>, <a href="https://github.com/isabella-pettini">Isabella Pettini</a>
      </Footer>
      </Layout>
      );
}

export default End;