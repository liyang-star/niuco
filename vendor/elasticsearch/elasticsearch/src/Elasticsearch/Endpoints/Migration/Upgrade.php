<?php
/**
 * Elasticsearch PHP client
 *
 * @link      https://github.com/elastic/elasticsearch-php/
 * @copyright Copyright (c) Elasticsearch B.V (https://www.elastic.co)
 * @license   http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @license   https://www.gnu.org/licenses/lgpl-2.1.html GNU Lesser General Public License, Version 2.1 
 * 
 * Licensed to Elasticsearch B.V under one or more agreements.
 * Elasticsearch B.V licenses this file to you under the Apache 2.0 License or
 * the GNU Lesser General Public License, Version 2.1, at your option.
 * See the LICENSE file in the project root for more information.
 */
declare(strict_types = 1);

namespace Elasticsearch\Endpoints\Migration;

use Elasticsearch\Common\Exceptions\RuntimeException;
use Elasticsearch\Endpoints\AbstractEndpoint;

/**
 * Class Upgrade
 * Elasticsearch API name xpack.migration.upgrade
 *
 * NOTE: this file is autogenerated using util/GenerateEndpoints.php
 * and Elasticsearch 6.8.16 (1f62092)
 */
class Upgrade extends AbstractEndpoint
{

    public function getURI(): string
    {
        if (isset($this->index) !== true) {
            throw new RuntimeException(
                'index is required for Upgrade'
            );
        }
        $index = $this->index;

        return "/_xpack/migration/upgrade/$index";
    }

    public function getParamWhitelist(): array
    {
        return [
            'wait_for_completion'
        ];
    }

    public function getMethod(): string
    {
        return 'POST';
    }
}
