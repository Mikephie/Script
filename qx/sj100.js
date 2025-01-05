/*
试卷100解锁VIP
2025.1.06

[rewrite_local]
^https:\/\/paper\.zjapp\.xyz\/api\/v1\/product\/receipt\/verify url script-response-body https://raw.githubusercontent.com/Mikephie/Script/main/qx/sj100.js

[mitm]
hostname = paper.zjapp.xyz
*/


var mikephie = JSON.parse($response.body);

    mikephie = {
  "code" : 0,
  "ts" : 1736085750531,
  "data" : {
    "info" : {
      "environment" : "Production",
      "pending_renewal_info" : [
        {
          "product_id" : "paper100_svip_weekly_38",
          "original_transaction_id" : "300002171829050",
          "auto_renew_product_id" : "paper100_svip_weekly_38",
          "auto_renew_status" : "1"
        },
        {
          "expiration_intent" : "1",
          "original_transaction_id" : "300002114329555",
          "is_in_billing_retry_period" : "0",
          "auto_renew_product_id" : "paper100_premium_weekly_28",
          "auto_renew_status" : "0",
          "product_id" : "paper100_premium_weekly_28"
        }
      ],
      "receipt" : {
        "app_item_id" : "6444004006",
        "in_app" : [
          {
            "quantity" : "1",
            "expires_date" : "2088-08-08 08:08:08 Etc\/GMT",
            "expires_date_pst" : "2088-08-08 08:08:08 America\/Los_Angeles",
            "is_in_intro_offer_period" : "true",
            "purchase_date_ms" : "1736085740000",
            "transaction_id" : "300002171829050",
            "is_trial_period" : "true",
            "original_transaction_id" : "300002171829050",
            "in_app_ownership_type" : "PURCHASED",
            "original_purchase_date_pst" : "2025-01-05 06:02:21 America\/Los_Angeles",
            "product_id" : "paper100_svip_weekly_38",
            "purchase_date" : "2025-01-05 14:02:20 Etc\/GMT",
            "original_purchase_date_ms" : "1736085741000",
            "web_order_line_item_id" : "300001031239313",
            "expires_date_ms" : "3742762088000",
            "purchase_date_pst" : "2025-01-05 06:02:20 America\/Los_Angeles",
            "original_purchase_date" : "2025-01-05 14:02:21 Etc\/GMT"
          },
          {
            "quantity" : "1",
            "expires_date" : "2024-11-30 14:14:35 Etc\/GMT",
            "expires_date_pst" : "2024-11-30 06:14:35 America\/Los_Angeles",
            "is_in_intro_offer_period" : "true",
            "purchase_date_ms" : "1732716875000",
            "transaction_id" : "300002114329555",
            "is_trial_period" : "true",
            "original_transaction_id" : "300002114329555",
            "in_app_ownership_type" : "PURCHASED",
            "original_purchase_date_pst" : "2024-11-27 06:14:36 America\/Los_Angeles",
            "product_id" : "paper100_premium_weekly_28",
            "purchase_date" : "2024-11-27 14:14:35 Etc\/GMT",
            "original_purchase_date_ms" : "1732716876000",
            "web_order_line_item_id" : "300001004403918",
            "expires_date_ms" : "1732976075000",
            "purchase_date_pst" : "2024-11-27 06:14:35 America\/Los_Angeles",
            "original_purchase_date" : "2024-11-27 14:14:36 Etc\/GMT"
          }
        ],
        "original_purchase_date" : "2024-11-27 14:10:21 Etc\/GMT",
        "bundle_id" : "com.paper100.scan",
        "receipt_creation_date" : "2025-01-05 14:02:22 Etc\/GMT",
        "receipt_type" : "Production",
        "adam_id" : "6444004006",
        "receipt_creation_date_pst" : "2025-01-05 06:02:22 America\/Los_Angeles",
        "original_purchase_date_pst" : "2024-11-27 06:10:21 America\/Los_Angeles",
        "request_date" : "2025-01-05 14:02:30 Etc\/GMT",
        "request_date_pst" : "2025-01-05 06:02:30 America\/Los_Angeles",
        "request_date_ms" : "1736085750435",
        "version_external_identifier" : "871515964",
        "application_version" : "1.0.65.240103",
        "original_application_version" : "1.0.55.241118",
        "original_purchase_date_ms" : "1732716621000",
        "receipt_creation_date_ms" : "1736085742000",
        "download_id" : "504026984215544888"
      },
      "status" : 0,
      "latest_receipt_info" : [
        {
          "quantity" : "1",
          "expires_date" : "2088-08-08 08:08:08 Etc\/GMT",
          "expires_date_pst" : "2088-08-08 08:08:08 America\/Los_Angeles",
          "is_in_intro_offer_period" : "true",
          "purchase_date_ms" : "1736085740000",
          "transaction_id" : "300002171829050",
          "is_trial_period" : "true",
          "original_transaction_id" : "300002171829050",
          "in_app_ownership_type" : "PURCHASED",
          "original_purchase_date_pst" : "2025-01-05 06:02:21 America\/Los_Angeles",
          "product_id" : "paper100_svip_weekly_38",
          "purchase_date" : "2025-01-05 14:02:20 Etc\/GMT",
          "subscription_group_identifier" : "21572955",
          "original_purchase_date_ms" : "1736085741000",
          "web_order_line_item_id" : "300001031239313",
          "expires_date_ms" : "3742762088000",
          "purchase_date_pst" : "2025-01-05 06:02:20 America\/Los_Angeles",
          "original_purchase_date" : "2025-01-05 14:02:21 Etc\/GMT"
        },
        {
          "quantity" : "1",
          "expires_date" : "2024-11-30 14:14:35 Etc\/GMT",
          "expires_date_pst" : "2024-11-30 06:14:35 America\/Los_Angeles",
          "is_in_intro_offer_period" : "true",
          "purchase_date_ms" : "1732716875000",
          "transaction_id" : "300002114329555",
          "is_trial_period" : "true",
          "original_transaction_id" : "300002114329555",
          "in_app_ownership_type" : "PURCHASED",
          "original_purchase_date_pst" : "2024-11-27 06:14:36 America\/Los_Angeles",
          "product_id" : "paper100_premium_weekly_28",
          "purchase_date" : "2024-11-27 14:14:35 Etc\/GMT",
          "subscription_group_identifier" : "21036093",
          "original_purchase_date_ms" : "1732716876000",
          "web_order_line_item_id" : "300001004403918",
          "expires_date_ms" : "1732976075000",
          "purchase_date_pst" : "2024-11-27 06:14:35 America\/Los_Angeles",
          "original_purchase_date" : "2024-11-27 14:14:36 Etc\/GMT"
        }
      ],
      "latest_receipt" : "MIIWRgYJKoZIhvcNAQcCoIIWNzCCFjMCAQExDzANBglghkgBZQMEAgEFADCCBXwGCSqGSIb3DQEHAaCCBW0EggVpMYIFZTAKAgEUAgEBBAIMADALAgEZAgEBBAMCAQMwDAIBCgIBAQQEFgI0KzAMAgEOAgEBBAQCAgFMMA0CAQ0CAQEEBQIDAr\/oMA4CAQkCAQEEBgIEUDMwNTAOAgELAgEBBAYCBAeOqCwwDgIBEAIBAQQGAgQz8kc8MA8CAQECAQEEBwIFAYAXsqYwEgIBDwIBAQQKAggG\/qnfJ2EEODAUAgEAAgEBBAwMClByb2R1Y3Rpb24wFwIBAwIBAQQPDA0xLjAuNjUuMjQwMTAzMBcCARMCAQEEDwwNMS4wLjU1LjI0MTExODAYAgEEAgECBBDvpSmeJDnwZfqKCmi3UJlOMBsCAQICAQEEEwwRY29tLnBhcGVyMTAwLnNjYW4wHAIBBQIBAQQUUyLhL3T7UhW3a\/vTI8+F1LHdi7gwHgIBCAIBAQQWFhQyMDI1LTAxLTA1VDE0OjAyOjIyWjAeAgEMAgEBBBYWFDIwMjUtMDEtMDVUMTQ6MDI6MzBaMB4CARICAQEEFhYUMjAyNC0xMS0yN1QxNDoxMDoyMVowRwIBBwIBAQQ\/w68rwlNCqTgkti+HDi0MQ5R\/4lhtSOGuoKs9OJ0OtzpZwdLoZN5AzwdPev6rMgmPOa2emDwBsGlziua9kU\/1MFECAQYCAQEESVv3dwZbusbvYk+DmEA6O+sP7W72ovgzGTXWg4sX+YZy6mPvssieyXzy9Ezp4tggtslH0HDUAqF3ObB\/nhNAmpSZCAeOyNVB3T0wggGUAgERAgEBBIIBijGCAYYwCwICBq0CAQEEAgwAMAsCAgawAgEBBAIWADALAgIGsgIBAQQCDAAwCwICBrMCAQEEAgwAMAsCAga0AgEBBAIMADALAgIGtQIBAQQCDAAwCwICBrYCAQEEAgwAMAwCAgalAgEBBAMCAQEwDAICBqsCAQEEAwIBAzAMAgIGsQIBAQQDAgEBMAwCAga3AgEBBAMCAQEwDAICBroCAQEEAwIBADAQAgIGrgIBAQQHAgUBkZd6kzASAgIGrwIBAQQJAgcBENlu5jaRMBoCAganAgEBBBEMDzMwMDAwMjE3MTgyOTA1MDAaAgIGqQIBAQQRDA8zMDAwMDIxNzE4MjkwNTAwHwICBqgCAQEEFhYUMjAyNS0wMS0wNVQxNDowMjoyMFowHwICBqoCAQEEFhYUMjAyNS0wMS0wNVQxNDowMjoyMVowHwICBqwCAQEEFhYUMjAyNS0wMS0wOFQxNDowMjoyMFowIgICBqYCAQEEGQwXcGFwZXIxMDBfc3ZpcF93ZWVrbHlfMzgwggGXAgERAgEBBIIBjTGCAYkwCwICBq0CAQEEAgwAMAsCAgawAgEBBAIWADALAgIGsgIBAQQCDAAwCwICBrMCAQEEAgwAMAsCAga0AgEBBAIMADALAgIGtQIBAQQCDAAwCwICBrYCAQEEAgwAMAwCAgalAgEBBAMCAQEwDAICBqsCAQEEAwIBAzAMAgIGsQIBAQQDAgEBMAwCAga3AgEBBAMCAQEwDAICBroCAQEEAwIBADAQAgIGrgIBAQQHAgUBgXgwRjASAgIGrwIBAQQJAgcBENltTLzOMBoCAganAgEBBBEMDzMwMDAwMjExNDMyOTU1NTAaAgIGqQIBAQQRDA8zMDAwMDIxMTQzMjk1NTUwHwICBqgCAQEEFhYUMjAyNC0xMS0yN1QxNDoxNDozNVowHwICBqoCAQEEFhYUMjAyNC0xMS0yN1QxNDoxNDozNlowHwICBqwCAQEEFhYUMjAyNC0xMS0zMFQxNDoxNDozNVowJQICBqYCAQEEHAwacGFwZXIxMDBfcHJlbWl1bV93ZWVrbHlfMjiggg7iMIIFxjCCBK6gAwIBAgIQfTkgCU6+8\/jvymwQ6o5DAzANBgkqhkiG9w0BAQsFADB1MUQwQgYDVQQDDDtBcHBsZSBXb3JsZHdpZGUgRGV2ZWxvcGVyIFJlbGF0aW9ucyBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eTELMAkGA1UECwwCRzUxEzARBgNVBAoMCkFwcGxlIEluYy4xCzAJBgNVBAYTAlVTMB4XDTI0MDcyNDE0NTAwM1oXDTI2MDgyMzE0NTAwMlowgYkxNzA1BgNVBAMMLk1hYyBBcHAgU3RvcmUgYW5kIGlUdW5lcyBTdG9yZSBSZWNlaXB0IFNpZ25pbmcxLDAqBgNVBAsMI0FwcGxlIFdvcmxkd2lkZSBEZXZlbG9wZXIgUmVsYXRpb25zMRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQGEwJVUzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAK0PNpvPN9qBcVvW8RT8GdP11PA3TVxGwpopR1FhvrE\/mFnsHBe6r7MJVwVE1xdtXdIwwrszodSJ9HY5VlctNT9NqXiC0Vph1nuwLpVU8Ae\/YOQppDM9R692j10Dm5o4CiHM3xSXh9QdYcoqjcQ+Va58nWIAsAoYObjmHY3zpDDxlJNj2xPpPI4p\/dWIc7MUmG9zyeIz1Sf2tuN11urOq9\/i+Ay+WYrtcHqukgXZTAcg5W1MSHTQPv5gdwF5PhM7f4UAz5V\/gl2UIDTrknW1BkH7n5mXJLrvutiZSvR3LnnYON6j2C9FUETkMyKZ1fflnIT5xgQRy+BV4TTLFbIjFaUCAwEAAaOCAjswggI3MAwGA1UdEwEB\/wQCMAAwHwYDVR0jBBgwFoAUGYuXjUpbYXhX9KVcNRKKOQjjsHUwcAYIKwYBBQUHAQEEZDBiMC0GCCsGAQUFBzAChiFodHRwOi8vY2VydHMuYXBwbGUuY29tL3d3ZHJnNS5kZXIwMQYIKwYBBQUHMAGGJWh0dHA6Ly9vY3NwLmFwcGxlLmNvbS9vY3NwMDMtd3dkcmc1MDUwggEfBgNVHSAEggEWMIIBEjCCAQ4GCiqGSIb3Y2QFBgEwgf8wNwYIKwYBBQUHAgEWK2h0dHBzOi8vd3d3LmFwcGxlLmNvbS9jZXJ0aWZpY2F0ZWF1dGhvcml0eS8wgcMGCCsGAQUFBwICMIG2DIGzUmVsaWFuY2Ugb24gdGhpcyBjZXJ0aWZpY2F0ZSBieSBhbnkgcGFydHkgYXNzdW1lcyBhY2NlcHRhbmNlIG9mIHRoZSB0aGVuIGFwcGxpY2FibGUgc3RhbmRhcmQgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdXNlLCBjZXJ0aWZpY2F0ZSBwb2xpY3kgYW5kIGNlcnRpZmljYXRpb24gcHJhY3RpY2Ugc3RhdGVtZW50cy4wMAYDVR0fBCkwJzAloCOgIYYfaHR0cDovL2NybC5hcHBsZS5jb20vd3dkcmc1LmNybDAdBgNVHQ4EFgQU7yhXtGCISVUx8P1YDvH9GpPEJPwwDgYDVR0PAQH\/BAQDAgeAMBAGCiqGSIb3Y2QGCwEEAgUAMA0GCSqGSIb3DQEBCwUAA4IBAQA1I9K7UL82Z8wANUR8ipOnxF6fuUTqckfPEIa6HO0KdR5ZMHWFyiJ1iUIL4Zxw5T6lPHqQ+D8SrHNMJFiZLt+B8Q8lpg6lME6l5rDNU3tFS7DmWzow1rT0K1KiD0\/WEyOCM+YthZFQfDHUSHGU+giV7p0AZhq55okMjrGJfRZKsIgVHRQphxQdMfquagDyPZFjW4CCSB4+StMC3YZdzXLiNzyoCyW7Y9qrPzFlqCcb8DtTRR0SfkYfxawfyHOcmPg0sGB97vMRDFaWPgkE5+3kHkdZsPCDNy77HMcTo2ly672YJpCEj25N\/Ggp+01uGO3craq5xGmYFAj9+Uv7bP6ZMIIEVTCCAz2gAwIBAgIUO36ACu7TAqHm7NuX2cqsKJzxaZQwDQYJKoZIhvcNAQELBQAwYjELMAkGA1UEBhMCVVMxEzARBgNVBAoTCkFwcGxlIEluYy4xJjAkBgNVBAsTHUFwcGxlIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MRYwFAYDVQQDEw1BcHBsZSBSb290IENBMB4XDTIwMTIxNjE5Mzg1NloXDTMwMTIxMDAwMDAwMFowdTFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxCzAJBgNVBAsMAkc1MRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQGEwJVUzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJ9d2h\/7+rzQSyI8x9Ym+hf39J8ePmQRZprvXr6rNL2qLCFu1h6UIYUsdMEOEGGqPGNKfkrjyHXWz8KcCEh7arkpsclm\/ciKFtGyBDyCuoBs4v8Kcuus\/jtvSL6eixFNlX2ye5AvAhxO\/Em+12+1T754xtress3J2WYRO1rpCUVziVDUTuJoBX7adZxLAa7a489tdE3eU9DVGjiCOtCd410pe7GB6iknC\/tgfIYS+\/BiTwbnTNEf2W2e7XPaeCENnXDZRleQX2eEwXN3CqhiYraucIa7dSOJrXn25qTU\/YMmMgo7JJJbIKGc0S+AGJvdPAvntf3sgFcPF54\/K4cnu\/cCAwEAAaOB7zCB7DASBgNVHRMBAf8ECDAGAQH\/AgEAMB8GA1UdIwQYMBaAFCvQaUeUdgn+9GuNLkCm90dNfwheMEQGCCsGAQUFBwEBBDgwNjA0BggrBgEFBQcwAYYoaHR0cDovL29jc3AuYXBwbGUuY29tL29jc3AwMy1hcHBsZXJvb3RjYTAuBgNVHR8EJzAlMCOgIaAfhh1odHRwOi8vY3JsLmFwcGxlLmNvbS9yb290LmNybDAdBgNVHQ4EFgQUGYuXjUpbYXhX9KVcNRKKOQjjsHUwDgYDVR0PAQH\/BAQDAgEGMBAGCiqGSIb3Y2QGAgEEAgUAMA0GCSqGSIb3DQEBCwUAA4IBAQBaxDWi2eYKnlKiAIIid81yL5D5Iq8UJcyqCkJgksK9dR3rTMoV5X5rQBBe+1tFdA3wen2Ikc7eY4tCidIY30GzWJ4GCIdI3UCvI9Xt6yxg5eukfxzpnIPWlF9MYjmKTq4TjX1DuNxerL4YQPLmDyxdE5Pxe2WowmhI3v+0lpsM+zI2np4NlV84CouW0hJst4sLjtc+7G8Bqs5NRWDbhHFmYuUZZTDNiv9FU\/tu+4h3Q8NIY\/n3UbNyXnniVs+8u4S5OFp4rhFIUrsNNYuU3sx0mmj1SWCUrPKosxWGkNDMMEOG0+VwAlG0gcCol9Tq6rCMCUDvOJOyzSID62dDZchFMIIEuzCCA6OgAwIBAgIBAjANBgkqhkiG9w0BAQUFADBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwHhcNMDYwNDI1MjE0MDM2WhcNMzUwMjA5MjE0MDM2WjBiMQswCQYDVQQGEwJVUzETMBEGA1UEChMKQXBwbGUgSW5jLjEmMCQGA1UECxMdQXBwbGUgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxFjAUBgNVBAMTDUFwcGxlIFJvb3QgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDkkakJH5HbHkdQ6wXtXnmELes2oldMVeyLGYne+Uts9QerIjAC6Bg++FAJ039BqJj50cpmnCRrEdCju+QbKsMflZ56DKRHi1vUFjczy8QPTc4UadHJGXL1XQ7Vf1+b8iUDulWPTV0N8WQ1IxVLFVkds5T39pyez1C6wVhQZ48ItCD3y6wsIG9wtj8BMIy3Q88PnT3zK0koGsj+zrW5DtleHNbLPbU6rfQPDgCSC7EhFi501TwN22IWq6NxkkdTVcGvL0Gz+PvjcM3mo0xFfh9Ma1CWQYnEdGILEINBhzOKgbEwWOxaBDKMaLOPHd5lc\/9nXmW8Sdh2nzMUZaF3lMktAgMBAAGjggF6MIIBdjAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH\/BAUwAwEB\/zAdBgNVHQ4EFgQUK9BpR5R2Cf70a40uQKb3R01\/CF4wHwYDVR0jBBgwFoAUK9BpR5R2Cf70a40uQKb3R01\/CF4wggERBgNVHSAEggEIMIIBBDCCAQAGCSqGSIb3Y2QFATCB8jAqBggrBgEFBQcCARYeaHR0cHM6Ly93d3cuYXBwbGUuY29tL2FwcGxlY2EvMIHDBggrBgEFBQcCAjCBthqBs1JlbGlhbmNlIG9uIHRoaXMgY2VydGlmaWNhdGUgYnkgYW55IHBhcnR5IGFzc3VtZXMgYWNjZXB0YW5jZSBvZiB0aGUgdGhlbiBhcHBsaWNhYmxlIHN0YW5kYXJkIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHVzZSwgY2VydGlmaWNhdGUgcG9saWN5IGFuZCBjZXJ0aWZpY2F0aW9uIHByYWN0aWNlIHN0YXRlbWVudHMuMA0GCSqGSIb3DQEBBQUAA4IBAQBcNplMLXi37Yyb3PN3m\/J20ncwT8EfhYOFG5k9RzfyqZtAjizUsZAS2L70c5vu0mQPy3lPNNiiPvl4\/2vIB+x9OYOLUyDTOMSxv5pPCmv\/K\/xZpwUJfBdAVhEedNO3iyM7R6PVbyTi69G3cN8PReEnyvFteO3ntRcXqNx+IjXKJdXZD9Zr1KIkIxH3oayPc4FgxhtbCS+SsvhESPBgOJ4V9T0mZyCKM2r3DYLP3uujL\/lTaltkwGMzd\/c6ByxW69oPIQ7aunMZT7XZNn\/Bh1XZp5m5MkL72NVxnn6hUrcbvZNCJBIqxw8dtk2cXmPIS4AXUKqK1drk\/NAJBzewdXUhMYIBtTCCAbECAQEwgYkwdTFEMEIGA1UEAww7QXBwbGUgV29ybGR3aWRlIERldmVsb3BlciBSZWxhdGlvbnMgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkxCzAJBgNVBAsMAkc1MRMwEQYDVQQKDApBcHBsZSBJbmMuMQswCQYDVQQGEwJVUwIQfTkgCU6+8\/jvymwQ6o5DAzANBglghkgBZQMEAgEFADANBgkqhkiG9w0BAQEFAASCAQAAb\/xxR8UnOekMFyhDTqP8IqfzRMJraU58kOwrAQdNAXIWIiPb5lqMqNXkOWQke7uX0\/o\/+5A9Z5vAvJn968yxBcUQyR1G7xbRNpnbHp2hq3VcI4xsEffzUE7koHRhXV17XDxNzbaWnGk2nhXckBblkJGzWylNNt09GUt2MFu5Mze7srKXH3ufuMsT7AuFlllakWeO6xbn+HTe22xUzg3cJCoA5NYu2sd4DP9PRyU1RudHONgqfq1l87Ep49zgmXOBbSwwco5yIAyujW0dDwTdcTA7UwlVQ5BGe9IDl6WNUNZbVmfupe4IfHf8y3dWRM+9ZtE8wt3\/52KhWE67bEip"
    }
  },
  "msg" : "ok"
}

$done({body: JSON.stringify(mikephie)});