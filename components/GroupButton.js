const GroupButton = (props) => {
    const { onClick, title, rounded, isActive, ...rest } = props;

    let roundedClassname;
    if (rounded === 'left') {
        roundedClassname = 'rounded-l-md';
    } else if (rounded === 'right') {
        roundedClassname = 'rounded-r-md';
    }

    const active = isActive ? 'bg-gray-50' : '';
    let classes = `${roundedClassname} ${active} inline-flex items-center px-2.5 py-1.5 md:px-4 md:py-2 md:text-sm border border-gray-300 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none`;

    return (
        <button type="button" className={classes} onClick={onClick} {...rest}>
            {title}
        </button>
    );
};

export default GroupButton;
