import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/2133e5b332dc8aad4fd5c61fafd5a97c.jpeg?lk3s=a5d48078&nonce=27345&refresh_token=20537e3a8b47b8e59cf3fa0fb5cc873c&x-expires=1722700800&x-signature=DBGmdTQA4peepr6zmzo7d6k6tx0%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoa"
            ></img>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyeen van a</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    ></FontAwesomeIcon>
                </p>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
