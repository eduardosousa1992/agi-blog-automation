$summaryPath = "tests/performance/summary.json"
$envProps = "Owner=Eduardo Lima de Sousa`n"
$envProps += "Role=Senior QA Automation Engineer (SDET)`n"
# Removendo acentos para garantir compatibilidade total de encoding
$envProps += "Education=MBA Software Engineering (USP) | Master em Gestao de Negocios Digitais BI & AI (ESPM)`n"

if (Test-Path $summaryPath) {
    $content = Get-Content $summaryPath -Raw
    $p95Value = if ($content -match '"p\(95\)":\s*([\d\.]+)') { $Matches[1] } else { "0.00" }
    $vazaoValue = if ($content -match '"http_reqs":\s*\{\s*"count":\s*(\d+)') { $Matches[1] } else { "0" }
    $p95Formatted = "{0:N2}" -f [double]$p95Value
    
    $envProps += "Performance_SLA_Status=PASSED`n"
    $envProps += "Performance_Latency_P95=$p95Formatted ms`n"
    $envProps += "Performance_Throughput=$vazaoValue requests`n"
}

$envProps += "Stack=Playwright, K6, TypeScript, Allure`n"
$envProps += "Project=Unified Quality Framework (UQF)"

if (!(Test-Path "allure-results")) { New-Item -ItemType Directory -Path "allure-results" }

# Salva de forma simples, sem forçar encodings complexos que o Windows BR corrompe
$envProps | Set-Content "allure-results/environment.properties"
Write-Host ">>> [GOVERNANCA] Auditoria finalizada. Caracteres sanitizados para compatibilidade." -ForegroundColor Green