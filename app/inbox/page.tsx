import Conversation from "../components/inbox/Conversation";


function MyPropertiesPage(){
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4">
            <h1 className="my-6 mb-6 text-2xl">
                Inbox
            </h1>

            <Conversation />
            <Conversation />
            <Conversation />
        </main>
    );
}

export default MyPropertiesPage;