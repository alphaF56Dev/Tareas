import {Header as Head, Icon} from 'semantic-ui-react';

export default function Header() {
    return (
        <div className="header">
            <Head as="h1" icon textAlign="center" color="purple">
                <Icon inverted color="purple" name="calendar check" circular/>
                <Head.Content>Tareas por realizar</Head.Content>
            </Head>
        </div>
    );
}