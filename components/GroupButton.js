const GroupButton = (props) => {
    const { onClick, title, rounded, isActive, ...rest } = props;

    let roundedClassname;
    if (rounded === 'left') {
        roundedClassname = 'rounded-l-md';
    } else if (rounded === 'right') {
        roundedClassname = 'rounded-r-md';
    }

    const active = isActive ? 'bg-gray-50' : '';
    const classes = `relative ${roundedClassname} inline-flex items-center px-4 py-2 hover:bg-gray-50 border border-gray-300 bg-white text-sm font-medium text-gray-700 ${active} focus:outline-none`;

    return (
        <button type="button" className={classes} onClick={onClick} {...rest}>
            {title}
        </button>
    );
};

export default GroupButton;
