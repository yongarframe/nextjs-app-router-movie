import MoviePage from "@/app/movie/[id]/page";
import Modal from "@/components/modal";

export default function page(props: any) {
  return (
    <Modal>
      <MoviePage {...props} />
    </Modal>
  );
}
