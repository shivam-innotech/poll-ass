import { Button, Card, Image, Placeholder } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Typography } from '@mui/material'
import _ from 'lodash'
import { useState } from 'react'

const cards = [
    {
        id: 1,
        avatar: 'https://media.tenor.com/ZgIRCUMksogAAAAM/sing-crayon-shin-chan.gif',
        header: 'Shin-chan',
    },
    {
        id: 2,
        avatar: 'https://c.tenor.com/hpYAF5X72OMAAAAC/hagemaru-the-raw-knee.gif',
        header: 'Hagamaru',
    },
]

const ChangePassword = () => {
    const [loading, setLoading] = useState(false);
    const [voteForA, setVoteForA] = useState(0);
    const [voteForB, setVoteForB] = useState(0);
    const [voted, setVoted] = useState(false);

    return <>
        <div className="center">
            <Card.Group doubling itemsPerRow={5} stackable>
                {_.map(cards, (card) => (
                    <Card key={card.header}>
                        {loading ? (
                            <Placeholder>
                                <Placeholder.Image square />
                            </Placeholder>
                        ) : (
                            <Image src={card.avatar} />
                        )}

                        <Card.Content>
                            {loading ? (
                                <Placeholder>
                                    <Placeholder.Header>
                                        <Placeholder.Line length='very short' />
                                        <Placeholder.Line length='medium' />
                                    </Placeholder.Header>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length='short' />
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            ) : (
                                <>
                                    <Card.Header>{card.header}</Card.Header>
                                    <Card.Meta>{card.date}</Card.Meta>
                                    <Card.Description>{card.description}</Card.Description>
                                </>
                            )}
                        </Card.Content>

                        <Card.Content extra>
                            <Button disabled={voted}
                                onClick={() =>
                                    [card.id === 1
                                        ? setVoteForA(voteForA + 1)
                                        : setVoteForB(voteForB + 1),
                                    setVoted(true),
                                    ]}
                                primary>
                                Vote
                            </Button>
                            <Button disabled={
                                (card.id === 1 && voteForA <= 0 ? true : false) || (card.id === 2 && voteForB <= 0 ? true : false)
                            } onClick={() => [
                                card.id === 1
                                    ? setVoteForA(voteForA - 1)
                                    : setVoteForB(voteForB - 1), setVoted(false)
                            ]} >
                                Unvote
                            </Button>
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group> <br />
        </div>
        <div className="result">
            <Card.Content extra>
                <Typography variant='h5'>RESULT</Typography>
                <Button primary>{voteForA}</Button>
                <Button primary>{voteForB}</Button>
            </Card.Content>
        </div>
    </>
}

export default ChangePassword;