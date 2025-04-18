import { Container, ListGroup, Row } from "react-bootstrap";
import ListGroupItemLink from "@/components/ListGroupItemLink";
import BackButton from "@/components/BackButton";
import UpdatePostsBTN from "@/components/UpdatePostsBTN";


export async function generateStaticParams() {
    return [
        { postId: '1' },
        { postId: '2' },
        { postId: '3' },
    ];
};

const getPostsService = async (postId) => {
    const res = await fetch(`http://localhost:4000/posts/${postId}`, {
        next: {
            tags: ['thisPost']
        }
    });
    const post = await res.json();
    return post;
};


const PostPage = async ({ params }) => {
    const post = await getPostsService(params.postId);
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center flex-column">
                <BackButton />
                <UpdatePostsBTN tag={'thisPost'} />
                <Row className='mt-5 w-100'>
                    <ListGroup>
                        <ListGroupItemLink title={post.id} />
                        <ListGroupItemLink title={post.title} />
                    </ListGroup>
                </Row>
            </Container>
        </>
    );
};

export default PostPage;
