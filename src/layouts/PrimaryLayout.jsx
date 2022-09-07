import { Layout } from "antd";
import React from "react";

const { Header, Footer, Content } = Layout;
const PrimaryLayout: React.FC = () => (
    <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>
);

export default PrimaryLayout;
