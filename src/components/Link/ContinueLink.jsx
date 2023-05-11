import {Link} from '@mui/material'
const ContinueLink = () => {
  return (
    <>
      <Link
        underline="hover"
        style={{ cursor: "pointer", color: "purple" }}
        size="small"
      >
        Continue....
      </Link>
    </>
  );
}

export default ContinueLink
