import { auth } from "@clerk/nextjs/server";
import { adminDb } from "../../../../../firebaseAdmin";
import PDFViewer from "@/components/PDFViewer";
import Chat from "@/components/Chat";

async function ChatToFilePage({
    params: { id }
}: {
    params: {
        id: string;
    }
}) {
    auth().protect();
    const { userId } = await auth();

    const ref = await adminDb
        .collection("users")
        .doc(userId!)
        .collection("files")
        .doc(id)
        .get();

    const url = ref.data()?.downloadUrl;



    return (
        <div className="grid lg:grid-cols-5 h-full overflow-hidden">
            <div className="col-span-5 lg:col-span-2 overflow-y-auto">
                <Chat id={id} />
            </div>
            <div className="col-span5 lg:col-span-3 overflow-auto bg-gray-100 border-r-2 lg:border-indigo-600 lg:-order-1 ">
                <PDFViewer url={url} />
            </div>
        </div>
    )
}

export default ChatToFilePage