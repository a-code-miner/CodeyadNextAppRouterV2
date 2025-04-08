import { Container, ListGroup, Row } from "react-bootstrap";
import ListGroupItemLink from "@/components/ListGroupItemLink";
import BackButton from "@/components/BackButton";

const getUsersService = async () => {
    const res = await fetch('http://localhost:4000/users?_sort=id&_order=desc');
    const users = await res.json();
    return users;
}

const UsersPage = async () => {
    const users = await getUsersService();

    const createUserAction = async (formData) => {
        'use server';
        const name = formData.get('name');
        const email = formData.get('email');
        const res = await fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
        });
        if (res.status === 200) {

        };
    };

    return (
        <>
            <Container className="d-flex justify-content-center align-items-center flex-column">
                <BackButton />

                <form className="text-right w-50" action={createUserAction}>
                    <h3>Create User</h3>
                    <input className="form-control mt-2" type="text" name="name" placeholder="Name" />
                    <input className="form-control mt-2" type="email" name="email" placeholder="Email" />
                    <button className="btn btn-primary mt-2" type="submit">Confirm</button>
                </form>

                <Row className='mt-5 w-100'>
                    <ListGroup>
                        {users.map((user) => (
                            <ListGroupItemLink key={user.id} href={`/posts/${user.id}`} title={user.name} />
                        ))}
                    </ListGroup>
                </Row>
            </Container>
        </>
    );
};

export default UsersPage;
