import { Container, ListGroup, Row, Button } from "react-bootstrap";
import ListGroupItemLink from "@/components/ListGroupItemLink";
import BackButton from "@/components/BackButton";


export async function generateStaticParams() {
    return [
        { userId: '1' },
        { userId: '2' },
        { userId: '3' },
    ];
};

const getUsersService = async (userId) => {
    const res = await fetch(`http://localhost:4000/users/${userId}`);
    const user = await res.json();
    return user;
};

const UserPage = async ({ params }) => {
    const user = await getUsersService(params.userId);
    return (
        <>
            <Container className="d-flex justify-content-center align-items-center flex-column">
                <BackButton />
                <Row className='mt-5 w-100'>
                    <ListGroup>
                        <ListGroupItemLink title={user.id} />
                        <ListGroupItemLink title={user.name} />
                        <ListGroupItemLink title={user.email} />
                        <ListGroupItemLink title={user.address.city} />
                    </ListGroup>
                </Row>
            </Container>
        </>
    );
};

export default UserPage;
