module.exports = {
    apps: [
        {
            name: 'pune-metro-queue',
            cwd: __dirname,
            script: 'php',
            args: 'artisan queue:work --sleep=3 --tries=3 --timeout=90',
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            watch: false,
            max_memory_restart: '300M',
            exp_backoff_restart_delay: 100,
            out_file: './storage/logs/pm2-queue-worker.log',
            error_file: './storage/logs/pm2-queue-worker-error.log',
            merge_logs: true,
            time: true,
        },
    ],
};
