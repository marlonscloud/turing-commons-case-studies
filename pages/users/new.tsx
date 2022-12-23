import Layout from "../../components/Layout";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import { selectUser } from "../../slices/userSlice";
import NewUserForm from "../../components/NewUserForm";

export default function NewUser() {  
    const user = useSelector(selectUser)

    if(!user) {
        window.location.href = "/"
    }
    return (
        <>
            {user && (
                <Layout>
                    <Header heading="User" subheading="New" back={true} />
                    <main>
                        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 flex justify-start gap-4 flex-wrap">
                        <NewUserForm />
                        </div>
                    </main>
                </Layout>
            )}
        </>
    )
}
