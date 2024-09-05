import BtnLoadingSpinner from "../reusable-components/BtnLoadingSpinner";

export default function AddPostBtn({ loading }: { loading: boolean }) {
  return (
    <button
      type="submit" // Ensure this is set to "submit"
      disabled={loading}
    >
      {loading ? <BtnLoadingSpinner /> : "Add Post"}
    </button>
  );
}
