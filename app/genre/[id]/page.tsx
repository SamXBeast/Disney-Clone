type Props = {
    params: {
      id: string;
    };
    searchParams: {
        genre: string;
    };
  };

function GenrePage({
    params: { id },
    searchParams: { genre },
}: Props) {
    return (
        <div>
            Welcome to genre with ID: {id} and name: {genre}
        </div>
    )
}

export default GenrePage
