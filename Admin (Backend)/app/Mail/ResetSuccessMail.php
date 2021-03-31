<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetSuccessMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $url;
    protected $app_url;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->url = $data['url'];
        $this->app_url = $data['app_url'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.resetsuccess')
            ->with([
                'url' => $this->url,
                'app_url' => $this->app_url,
            ])
            ->subject('Password resetting successful!')
            ->from('eezyshipper@gmail.com', 'eezyShipper');
    }
}