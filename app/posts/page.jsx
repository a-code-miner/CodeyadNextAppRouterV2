import Link from "next/link";
import { Container, ListGroup, Row } from "react-bootstrap";
import ListGroupItemLink from "@/components/ListGroupItemLink";
import BackButton from "@/components/BackButton";

const getPostsService = async () => {
    const res = await fetch('http://localhost:4000/posts', {
        next: {
            revalidate: 10
        }
    });
    const posts = await res.json();
    return posts;
}

const PostsPage = async () => {
    const posts = await getPostsService();
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center flex-column">
                <BackButton />
                <Row className='mt-5 w-100'>
                    <ListGroup>
                        {posts.map((post) => (
                            <ListGroupItemLink key={post.id} href={`/posts/${post.id}`} title={post.title} />
                        ))}
                    </ListGroup>
                </Row>
            </Container>
        </>
    );
};

export default PostsPage;
