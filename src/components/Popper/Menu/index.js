import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as PopperWapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };
    return (
        <Tippy
            interactive
            delay={[0, 600]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWapper className={cx('menu-popper')}>
                        {renderItems()}
                    </PopperWapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
