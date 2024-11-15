export const HOST = import.meta.env.VITE_SERVER_URL;

export const AUTH_ROUTES = "api/auth";
export const CONTACT_ROUTES = "api/contacts"
export const MESSAGES_ROUTES = "api/messages";
export const CHANNEL_ROUTES = "api/channel"

export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`
export const GET_USER_ROUTE = `${AUTH_ROUTES}/user-info`;
export const UPDATE_PROFILE_ROUTE = `${AUTH_ROUTES}/update-profile`;
export const ADD_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTES}/add-profile-image`;
export const REMOVE_PROFILE_IMAGE_ROUTE = `${AUTH_ROUTES}/remove-profile-image`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;


export const SEARCH_CONTACTS_ROUTES = `${CONTACT_ROUTES}/search`;
export const GET_DM_CONTACTS_ROUTES = `${CONTACT_ROUTES}/get-contacts-for-dm`;
export const GET_ALL_CONTACTS_ROUTES = `${CONTACT_ROUTES}/get-all-contacts`;

export const GET_ALL_MESSAGES_ROUTES = `${MESSAGES_ROUTES}/get-messages`
export const UPLOAD_FILE_ROUTE = `${MESSAGES_ROUTES}/upload-file`

export const CREATE_CHANNEL_ROUTE = `${CHANNEL_ROUTES}/create-channel`
export const GET_USER_CHANNELS_ROUTE = `${CHANNEL_ROUTES}/get-user-channels`
export const GET_CHANNEL_MESSAGES = `${CHANNEL_ROUTES}/get-channel-messages`