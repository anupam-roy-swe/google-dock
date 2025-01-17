import Editor from '@/app/documents/[documentId]/editor';
import Toolbar from '@/app/documents/[documentId]/toolbar';

interface DocumentIdPageProps {
  params: Promise<{ documentID: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const {} = await params;

  return (
    <div>
      <Toolbar />
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
