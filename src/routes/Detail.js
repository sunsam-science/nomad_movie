import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://nomad-movies.nomadcoders.workers.dev/movies/${id}`
      );
      const json = await response.json();
      console.log(json); // 가져온 데이터를 콘솔에 출력
    } catch (error) {
      console.error("Failed to fetch movie details:", error); // 에러 처리
    }
  };

  useEffect(() => {
    getMovie(); // 컴포넌트가 마운트될 때 getMovie 호출
  }, [id]); // id가 변경될 때만 실행

  return <div>Detail Page for Movie ID: {id}</div>;
}

export default Detail;
