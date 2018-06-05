import storage from 'good-storage'

const TOKEN_KEY = '__token__'
const TIMESTAMP_KEY = '__timestamp__'
const UID_KEY = '__uid__'

export function saveToken(token) {
  storage.set(TOKEN_KEY, token)
  return token
}

export function loadToken() {
  return storage.get(TOKEN_KEY, 'null')
}

export function saveTimestamp(timestamp) {
  storage.set(TIMESTAMP_KEY, timestamp)
  return timestamp
}

export function loadTimestamp() {
  return storage.get(TIMESTAMP_KEY, [])
}

export function saveUid(uid) {
  storage.set(UID_KEY, uid)
  return uid
}

export function loadUid() {
  return storage.get(UID_KEY, [])
}
