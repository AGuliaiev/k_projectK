
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import {fetchReviews} from "../../services/rewiewsService";

export default function Reviews() {
    const [review, setReview] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchReviews(id)
            .then(setReview)
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    if (!review) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <ul className={css.reviewsList}>
                {review.map(({ id, content, author }) => (
                    <li className={css.reviewsItem} key={id}>
                        <p className={css.reviewAuthor}>{author}</p>
                        <p className={css.reviewContent}>{content}</p>
                    </li>
                ))}
            </ul>
            {!review.length && <p>This movie has no reviews.</p>}
        </>
    );
}
