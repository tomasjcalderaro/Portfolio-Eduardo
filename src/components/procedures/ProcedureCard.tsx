type Props = {
    title: string;
    description: string;
    image?: string;
    video?: string;
};

const ProcedureCard = ({
    title,
    description,
    image,
    video,
}: Props) => {
    return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
        {video ? (
        <iframe
            src={video}
            className="w-full h-64"
            allowFullScreen
        />
        ) : (
        <img
            src={image}
            alt={title}
            className="w-full h-64 object-cover"
        />
        )}

        <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">
            {title}
        </h2>

        <p className="text-gray-600 leading-relaxed">
            {description}
        </p>
        </div>
    </div>
    );
};

export default ProcedureCard;