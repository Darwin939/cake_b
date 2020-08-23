import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SECRET_KEY = 't3-4=+u(#%%@5d=%!vbcm!)48rdk*5ruh&5oku4-fm6&kxvgh&'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ["*"]

SITE_URL = "https://thawing-reef-32246.herokuapp.com"
WS_CHAT_URL = "ws://thawing-reef-32246.herokuapp.com/ws/chat/"
# Application definition

SESSION_COOKIE_SECURE = False
SESSION_COOKIE_SECURE = False  # default use just to override your prod setting
SESSION_COOKIE_DOMAIN = None

INSTALLED_APPS = [

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'channels',
    'rest_framework',
    'main_api.apps.MainApiConfig',
    'chat.apps.ChatConfig',
    'corsheaders',
    'django_filters',
    'authorization.apps.AuthorizationConfig',
    # serving static React

]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',

]

ROOT_URLCONF = 'nateste.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'static/build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
    'DATETIME_FORMAT': '%s',
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend'],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
    ]
}

WSGI_APPLICATION = 'nateste.wsgi.application'

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'd975ogplphmhgq',
        'HOST': 'ec2-54-247-122-209.eu-west-1.compute.amazonaws.com',
        'PORT': '5432',
        'PASSWORD': 'cc655d814ce583f6c5c166e1fe5bdaf1fdd34f2d9c531c46d4b0f280e302dcc6',
        'USER': 'vpeicwrpbzwhdv'

    }
}
DATABASE_URL = "postgresql://ec2-54-247-122-209.eu-west-1.compute.amazonaws.com:5432/d975ogplphmhgq"
# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/


# lines to enable cors anywhere
CORS_ORIGIN_ALLOW_ALL = True  # If this is used then `CORS_ORIGIN_WHITELIST` will not have any effect
CORS_ALLOW_CREDENTIALS = True
CORS_ORIGIN_WHITELIST = [
    'http://localhost:3000',
    'https://thawing-reef-32246.herokuapp.com',
    "http://localhost:5000"
]  # If this is used, then not need to use `CORS_ORIGIN_ALLOW_ALL = True`
CORS_ORIGIN_REGEX_WHITELIST = [
    'http://localhost:3000',
    'https://thawing-reef-32246.herokuapp.com/api/order/',
    "http://localhost:5000"
]

# declare static files for browsarable-api in restframework
# STATIC_URL = '/static/'
# STATIC_ROOT = os.path.join(BASE_DIR, "static")
#
# STATICFILES_DIRS = (
#     os.path.join(BASE_DIR, 'static',  "build",'static'),  # update the STATICFILES_DIRS
# )
# STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
# Media
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, "media")

# django channels
REDIS_URL = "redis://h:p388650614fd18b4752c5201097a2df26ca255ae4059301d63bb33f9a1a05c97e@ec2-34-247-221-62.eu-west-1.compute.amazonaws.com:22389"

# Channels
ASGI_APPLICATION = 'nateste.routing.application'
CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            "hosts": [os.environ.get('REDIS_URL', 'redis://localhost:6379')],

        },

    },
}

STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static', "build", "static"),  # update the STATICFILES_DIRS
)



LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'loggers': {
        '': {
            'handlers': ['console'],
            'level': 'INFO',
        },
        'django': {
            'handlers': ['console'],
            'level': 'INFO',
        },
    },
}