"use client"
import {InlineShareButtons} from 'sharethis-reactjs';
export default function Share(){
    return(
        <>
                <InlineShareButtons
          config={{
            alignment: 'center',
            color: 'social',
            enabled: true,
            font_size: 16,
            labels: 'cta',
            language: 'en',
            networks: [
              'whatsapp',
              'linkedin',
              'twitter',
              'gmail',
              'email',
              'reddit'
            ],
            padding: 12,
            radius: 4,
            show_total: true,
            size: 40
          }}
        />
        </>
    )
}