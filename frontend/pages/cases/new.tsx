import Layout from "../../components/Layout";
import Header from "../../components/Header";
import NewCaseForm from "../../components/NewCaseForm";
// import RichTextEditor from "react-rte";

export default function NewCase() {  
    return (
        <Layout>
            <Header heading="Case Study" subheading="New" back={true} />
            <main>
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-start gap-4 flex-wrap">
                <NewCaseForm />
                </div>
            </main>
        </Layout>
    )
}
