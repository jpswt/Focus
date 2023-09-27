import Link from 'next/link';

const FolderCard = ({ folder }: any) => {
	const folderName = folder.name.at(0).toUpperCase() + folder.name.slice(1);

	return (
		<div className="card h-60 w-full border border-accent bg-base-100 shadow-xl">
			<div className="card-body">
				{/* <img src={} alt="" /> */}
				<h2 className="card-title">{folderName}</h2>
				<p>Click to view images.</p>

				<Link href={`/albums/${folder.name}`} className="btn btn-primary">
					View Photos
				</Link>
			</div>
		</div>
	);
};
export default FolderCard;
