import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = (props) => {

    const photoReplacer = (item) => {
        if (item === null) {
            return 'https://rtfm.co.ua/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png';
        }
        return item;
    };

    return (
        <div className="profileInfo_wrapper">
            <div className="avatar_wrap">
                <img src={photoReplacer(props.profileInfo.photos.large)} alt="" className="avatar" />
            </div>
            <div className="info_wrap">
                <span className="user_name">{props.profileInfo.fullName}</span>
                <p className="status">{props.profileInfo.aboutMe}</p>

                <div class="contact_wrap">
                    <ul class="contact_list">
                        <li class="contact_list_item">
                            <a href="" class="contact_list_item_icon_link">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="" class="contact_list_item_link">
                                {props.profileInfo.contacts.facebook}
                            </a>
                        </li>
                        <li class="contact_list_item">
                            <a href="" class="contact_list_item_icon_link">
                                <i class="fab fa-vk"></i>
                            </a>
                            <a href="" class="contact_list_item_link">
                                {props.profileInfo.contacts.vk}
                            </a>
                        </li>
                        <li class="contact_list_item">
                            <a href="" class="contact_list_item_icon_link">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="" class="contact_list_item_link">
                                {props.profileInfo.contacts.twitter}
                            </a>
                        </li>

                        <li class="contact_list_item">
                            <a href="" class="contact_list_item_icon_link">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="" class="contact_list_item_link">
                                {props.profileInfo.contacts.intagram}
                            </a>
                        </li>
                        <li class="contact_list_item">
                            <a href="" class="contact_list_item_icon_link">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="" class="contact_list_item_link">
                                {props.profileInfo.contacts.youtube}
                            </a>
                        </li>
                        <li class="contact_list_item">
                            <a href="" class="contact_list_item_icon_link">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="" class="contact_list_item_link">
                                {props.profileInfo.contacts.github}
                            </a>
                        </li>
                    </ul>
                </div>
                <div>desc</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
